<template>
  <section class="form-section">
    <h1>{{ heading }}</h1>
    <form action="" class="form-container">
      <input
        type="text"
        class="formControl"
        name="username"
        placeholder="username"
      />
      <input type="text" class="formControl" name="email" placeholder="email" />
      <input
        type="text"
        class="formControl"
        name="password"
        placeholder="password"
      />
      <input type="text" class="formControl" name="phone" placeholder="phone" />
      <input
        type="text"
        class="formControl"
        name="address"
        placeholder="address"
      />

      <button type="button">Create Account</button>
    </form>
  </section>

  <footer>
    {{ title }}
  </footer>
</template>
<script>
export default {
  name: "RegistrationForm",
  props: {
    heading: String,
  },
  data() {
    return {
      title: "Hello title",
    };
  },
};
</script>

<style>
h1 {
  background: black;
  color: white;
  font-size: 2rem;
}
section {
  background: #091011a8;
  height: 100vh;
  width: 100vw;
}
section form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7ac5d7a8;
  align-items: center;
  height: fit-content;
}

input.formControl {
  outline: none;
  appearance: none;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 1.4rem 0rem;
}
</style>