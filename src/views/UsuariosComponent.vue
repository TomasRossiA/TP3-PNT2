<template>
  <div class="container">
    <h2>Usuarios</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="usuarios.length === 0">
          <td colspan="3">No hay usuarios disponibles</td>
        </tr>
        <tr v-else v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.nombre }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.telefono }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getUsers } from '@/users'; // Asegúrate de que la ruta sea correcta según la ubicación real del archivo usuarios.js


export default {
  name: 'UsuariosComponent',
  data() {
    return {
      usuarios: []
    };
  },
  mounted() {
    getUsers()
      .then(response => {
        this.usuarios = response.data;
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
