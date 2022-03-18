SELECT COUNT(types.generation_id) AS nb FROM types JOIN pokemon_types ON(pokemon_types.type_id=types.id) JOIN pokemon ON(pokemon.id=pokemon_types.pokemon_id) JOIN pokemon_form_generations ON(pokemon_form_generations.pokemon_form_id=pokemon.id) WHERE pokemon_form_generations.generation_id <= 3;