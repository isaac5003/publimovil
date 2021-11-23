<template>
  <div
    class="
      w-full
      h-screen
      bg-gray-400
      flex flex-col
      items-center
      justify-center
    "
  >
    <div class="w-full max-w-xs">
      <form
        class="bg-white shadow-md rounded flex flex-col items-center py-8 gap-4"
        @submit.prevent="submit(user)"
        ref="form"
        :v-model="user"
      >
        <ValidationObserver ref="form" v-slot="{ invalid }">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Nombre
            </label>
            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
              <input
                type="text"
                v-model="user.name"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                placeholder="Nombre"
              />
              <span class="text-red-600 block">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <input
                type="text"
                v-model="user.email"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
                placeholder="correo@example.com"
              />
              <span class="text-red-600 block">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Telefono
            </label>
            <ValidationProvider rules="required|digits:8" v-slot="{ errors }">
              <input
                type="text"
                v-model="user.phone"
                class="
                  shadow
                  appearance-none
                  border
                  rounded
                  w-full
                  py-2
                  px-3
                  text-gray-700
                  mb-3
                  leading-tight
                  focus:outline-none focus:shadow-outline
                "
              />
              <span class="text-red-600 block">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div>
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
              type="submit"
              :disabled="invalid"
            >
              Sign In
            </button>
          </div>
        </ValidationObserver>
      </form>
    </div>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  fetchOnServer: false,
  data() {
    return {
      value: "",
      user: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submit(user) {
      console.log(user);
      const config = {
        headers: {
          Authorization: " Bearer 11|WtSjq2ZKMApxfJQcnhrKhMpTi8bhiSxaInb0dz1s",
        },
      };

      this.$axios.post("/api/v1/players", user, config).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>