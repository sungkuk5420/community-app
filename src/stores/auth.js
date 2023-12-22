import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  console.log("userData", user);
  const setUser = (userData) => {
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
      };
    } else {
      user.value = null;
    }
  };

  return {
    user,
    setUser,
    isAuthenticated,
  };
});
