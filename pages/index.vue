<template>
  <div
    class="
      w-full
      h-screen
      bg-gray-300
      flex flex-col
      items-center
      justify-center
      relative
    "
  >
    <div
      class="
        mb-4
        rounded-md
        bg-green-500
        px-2
        py-2
        absolute
        top-6
        right-16
        text-white
      "
      v-if="dataSave"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span class="inline-block">{{ message }}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span class="inline-block">{{ user }}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
        <span class="inline-block">{{ id_user }}</span>
      </div>
    </div>
    <div class="w-full max-w-xs">
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <form
          class="
            bg-white
            shadow-md
            rounded
            flex flex-col
            items-center
            py-8
            gap-4
          "
          @submit.prevent="submit('form', userModel)"
          :model="userModel"
          id="form-field"
        >
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
                v-model="userModel.name"
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
                v-model="userModel.email"
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
                v-model="userModel.phone"
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
                placeholder="00000000"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline-block animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                v-if="spinerSave"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Guardar
            </button>
          </div>
        </form>
      </ValidationObserver>
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
      user: "",
      id_user: "",
      dataSave: false,
      spinerSave: false,
      message: "",
      userModel: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submit(formName, userModel) {
      this.spinerSave = true;
      const config = {
        headers: {
          Authorization: " Bearer 11|WtSjq2ZKMApxfJQcnhrKhMpTi8bhiSxaInb0dz1s",
        },
      };

      this.$axios.post("/api/v1/players", userModel, config).then((res) => {
        this.message = res.data.message;
        this.user = res.data.data.name;
        this.id_user = res.data.data.id;
        this.dataSave = true;
        this.spinerSave = false;
        this.userModel.name = "";
        this.userModel.email = "";
        this.userModel.phone = "";
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
        setTimeout(() => {
          this.dataSave = false;
        }, 4000);
      });
    },
  },
};
</script>