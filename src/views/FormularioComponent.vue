<template>
  <div class="container">
    <h2>Formulario</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="nombre">
        <div v-if="errors.nombre" class="text-danger">{{ errors.nombre }}</div>
      </div>
      <div class="mb-3">
        <label for="edad" class="form-label">Edad</label>
        <input type="number" class="form-control" id="edad" v-model="edad">
        <div v-if="errors.edad" class="text-danger">{{ errors.edad }}</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email">
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <h3 class="mt-4">Datos ingresados:</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.email">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.edad }}</td>
          <td>{{ usuario.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'FormularioComponent',
  data() {
    return {
      nombre: '',
      edad: '',
      email: '',
      usuarios: [],
      errors: {},
    };
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.nombre) {
        this.errors.nombre = 'El nombre es requerido.';
      } else if (this.nombre.length < 5 || this.nombre.length > 15) {
        this.errors.nombre = 'El nombre debe tener entre 5 y 15 caracteres.';
      }

      if (!this.edad) {
        this.errors.edad = 'La edad es requerida.';
      } else if (this.edad < 18 || this.edad > 120) {
        this.errors.edad = 'La edad debe estar entre 18 y 120 años.';
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email) {
        this.errors.email = 'El email es requerido.';
      } else if (!emailPattern.test(this.email)) {
        this.errors.email = 'El email no es válido.';
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        const usuario = {
          nombre: this.nombre,
          edad: this.edad,
          email: this.email,
        };
        this.usuarios.push(usuario);
        this.nombre = '';
        this.edad = '';
        this.email = '';
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
