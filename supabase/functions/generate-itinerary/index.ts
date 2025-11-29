import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { destination, days, budget, interests, travelStyle } = await req.json();

    if (!destination || !days) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const prompt = `Create a detailed ${days}-day travel itinerary for ${destination}. 
    Budget: ₹${budget || 'moderate'}
    Travel Style: ${travelStyle || 'balanced'}
    Interests: ${interests?.join(', ') || 'general sightseeing'}
    
    Please provide:
    1. Day-by-day itinerary with morning, afternoon, and evening activities
    2. Recommended accommodations within budget
    3. Local food recommendations
    4. Transportation tips
    5. Safety considerations
    6. Estimated daily costs
    
    Format the response as a structured JSON with the following schema:
    {
      "destination": "string",
      "days": number,
      "total_estimated_cost": "string",
      "daily_itinerary": [
        {
          "day": number,
          "title": "string",
          "morning": "string",
          "afternoon": "string",
          "evening": "string",
          "accommodation": "string",
          "estimated_cost": "string"
        }
      ],
      "food_recommendations": ["string"],
      "transportation_tips": ["string"],
      "safety_tips": ["string"],
      "packing_list": ["string"]
    }`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No response from AI');
    }

    // Extract JSON from response
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    let itinerary;
    
    if (jsonMatch) {
      itinerary = JSON.parse(jsonMatch[0]);
    } else {
      // Fallback: create structured response from text
      itinerary = {
        destination,
        days,
        total_estimated_cost: `₹${budget || 'Varies'}`,
        description: generatedText,
        daily_itinerary: [],
        food_recommendations: [],
        transportation_tips: [],
        safety_tips: [],
        packing_list: []
      };
    }

    return new Response(
      JSON.stringify({ success: true, itinerary }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error generating itinerary:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to generate itinerary' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});