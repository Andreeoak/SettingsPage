<template>
  <div>
    <h2 class="text-2xl mb-4">
    General
  </h2>
    <form class="space-y-4 mx-auto">
      <div>
        <label>
          Username
        </label>
        <input type="text"/>
      </div>
      <div>
        <label>
          Email
        </label>
        <input type="email"/>
      </div>

      <div>
        <label>
          About Me
        </label>
        <textarea></textarea>
      </div>

      <div>
        <label>Gender</label>
        <div class="flex gap-4">
          <label><input type="radio" name="gender" value="male" /> Male</label>
          <label><input type="radio" name="gender" value="female" /> Female</label>
          <label><input type="radio" name="gender" value="other" /> Other</label>
        </div>
      </div>

      <div>
        <label>
          Country
        </label>
        <select>
          <option>UK</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Brazil</option>
        </select>
      </div>

      <button type="submit" class="btn-primary">
        Save
      </button>

    </form>
  </div>
</template>
