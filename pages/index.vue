<template>
  <div
    class="
      w-full
      h-screen
      bg-gray-500
      flex flex-col
      items-center
      justify-center
    "
  >
    <div
      class="
        form
        w-2/6
        h-1/2
        bg-red-300
        flex flex-row
        items-center
        justify-around
      "
    >
      <ValidationObserver ref="form" v-slot="{ invalid }">
        <form @submit.prevent="submit(user)" ref="form" :v-model="user">
          <div>
            <ValidationProvider rules="required|alpha" v-slot="{ errors }">
              <input type="text" v-model="user.name" />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div>
            <ValidationProvider rules="required|email" v-slot="{ errors }">
              <input type="text" v-model="user.email" />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div>
            <ValidationProvider rules="required|digits:8" v-slot="{ errors }">
              <input type="text" v-model="user.phone" />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div>
            <button
              type="submit"
              size="small"
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
              :disabled="invalid"
            >
              Hola
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