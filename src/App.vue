<template>
  <div class="reading-typography">
    <h1 v-if="!recipe">Add a New Recipe</h1>
    <h1 v-if="recipe">Edit Recipe: {{ recipe.title }}</h1>
    <div class="grid-x_5:lg grid gap_5:lg gap_6:xl gap_4 ">
      <form @submit.prevent="submitForm" class="flex flex_column gap_3 justify_start col-start_start col-end_4">
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="title">Title:</label>
          <input type="text" id="title" v-model="recipe.title">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="author">Author:</label>
          <input type="text" id="author" v-model="recipe.author">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="date">Date:</label>
          <input type="date" id="date" v-model="recipe.date">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="description">Description:</label>
          <textarea id="description" v-model="recipe.description"></textarea>
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="image">Image URL:</label>
          <input type="url" id="image" v-model="recipe.image">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="yield">Yield:</label>
          <input type="text" id="yield" v-model="recipe.yield">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="prep_time">Prep Time:</label>
          <input type="text" id="prep_time" v-model="recipe.prep_time">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="cook_time">Cook Time:</label>
          <input type="text" id="cook_time" v-model="recipe.cook_time">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display" for="total_time">Total Time:</label>
          <input type="text" id="total_time" v-model="recipe.total_time">
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display">Ingredients:</label>
          <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="flex_column flex gap_3">
            <form-group class="flex flex_row gap_2">
              <label class="font_medium">Ingredient {{ index + 1 }}:</label>
              <input type="text" v-model="ingredient.name" placeholder="Ingredient name">
              <input type="text" v-model="ingredient.quantity" placeholder="Quantity">
              <select v-model="ingredient.unit">
                <option value="">Select unit</option>
                <option value="whole">~</option>
                <option value="tsp">tsp</option>
                <option value="tbsp">tbsp</option>
                <option value="cups">cups</option>
                <option value="oz">oz</option>
                <option value="g">g</option>
                <option value="lb">lb</option>
                <option value="kg">kg</option>
              </select>
              <button class="btn btn-light self_start" @click="addIngredientDetails(ingredient)">Add Details</button>
            </form-group>
            <textarea v-show="ingredient.detail" name="i" id="" cols="30" rows="2" v-model="ingredient.detail" class="p_2 p_3:md font_ui"></textarea>
          </div>
          <button class="btn btn-secondary self_start" @click="addIngredient">Add Ingredient</button>
        </div>
        <div class="flex flex_column gap_2">
          <label class="font_bold font-size_up-1 font_display">Cooking Instructions:</label>
          <div v-for="(instruction, index) in recipe.instructions" :key="index" class="flex_column flex gap_3">
            <label>Instruction {{ index + 1 }}:</label>
            <textarea v-model="instruction.content" placeholder="Enter cooking instruction"></textarea>
            <div class="flex_row flex gap_4">
               <form-group class="flex flex_row gap_2"><label class="font_medium" for="prep_time">Prep Time</label><input type="number" name="prep_time" v-model="instruction.prep_time"></form-group>
               <form-group class="flex flex_row gap_2"><label class="font_medium" for="cook_time">Cook Time</label><input type="number" name="cook_time" v-model="instruction.cook_time"></form-group>
               <form-group class="flex flex_row gap_2"><label class="font_medium" for="nonactive_time">Non Active Time</label><input type="number" name="nonactive_time" v-model="instruction.nonactive_time"></form-group>
            </div>
          </div>
        </div>
        <button type="button" @click="addInstruction">Add Instruction</button>
        <button class="btn btn-primary self_start" type="submit">{{ recipe ? 'Save' : 'Create' }}</button>
      </form>
      <aside class="col-start_4 col-end_end">
        <section class="flex flex_column gap_3 p-y_4">
          <label class="font_bold font-size_up-1 font_display" for="json">Paste JSON Data:</label>
          <textarea id="json" v-model="jsonData"></textarea>
          <button class="btn btn-primary self_start" @click="loadRecipe">Load Recipe</button>
        </section>
        <div v-if="recipe" class="bg_black-1  br_round p_4">
          <h2 class="c_primary-5">Recipe Data</h2>
          <code class="block c_white bg_black-8 br_radius p_4"><pre style="word-wrap: break-word; white-space: pre-wrap;"><div class="font_0 font_ui user-select-all">{{ recipeData }}</div></pre> </code>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        title: '',
        author: 'Matt Watier',
        date: '2023-01-01',
        description: '',
        image: '',
        yield: '',
        prep_time: '',
        cook_time: '',
        total_time: '',
        ingredients: [
          { name: '', quantity: '', unit: '' }
        ],
        instructions: [
          { content: '', prep_time: '', cook_time: '', nonactive_time: '' }
        ]
      },
      jsonData: null,
      recipeData: null
    }
  },
  methods: {
    addIngredient() {
      this.recipe.ingredients.push({
        name: '',
        quantity: '',
        unit: ''
      })
    },
    addInstruction() {
      this.recipe.instructions.push({
        content: '', prep_time: '', cook_time: '', nonactive_time: ''
      })
    }, addIngredientDetails(ingredient) {
      ingredient.detail = 'add detail'

    },
    submitForm() {
      this.recipeData = JSON.stringify(this.recipe, null, 2)
    },
    loadRecipe() {
      try {
        const data = JSON.parse(this.jsonData)
        if (data && data.recipe) {
          this.recipe = data.recipe
          this.recipeData = null
        } else {
          throw new Error('Invalid recipe data')
        }
      } catch (error) {
        alert('Error loading recipe data')
        console.error(error)
      }
    }
  }
}
</script>
