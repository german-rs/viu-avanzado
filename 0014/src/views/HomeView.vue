<script>
import { signOut, auth } from '@/auth';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const userEmail = ref('');

    onMounted(() => {
      const user = auth.currentUser;
      if (user) {
        userEmail.value = user.email;
      }
    });

    
    const logout = async () => {
      try {
        await signOut(auth);
        router.push({ name: 'login' });
      } catch (error) {
        console.error('Error de credenciales: ', error);
      }
    };

    return {
      userEmail,
      logout
    };
  }
};
</script>

<template>
  <div class="home container">
    <h1 class="home__title">Home</h1>
    <h3 class="home__subtitle" >Welcome, {{ userEmail }}</h3>
    <p class="home__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Tempora molestiae omnis fuga vero, dolores odio quas cumque 
      cum quod dolorem unde fugiat repellendus ipsam voluptatibus, 
      minima aspernatur pariatur asperiores quam nostrum. Commodi, 
      laudantium veritatis consequatur maiores, culpa, unde saepe 
      inventore deleniti quibusdam distinctio eveniet ipsum tempora 
      cum ratione ullam! Fuga.
    </p>
    <p class="home__text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Velit dicta magnam esse suscipit laudantium ratione. Vitae tempora 
      facilis consequuntur blanditiis accusamus sapiente.
    </p>

  </div>
</template>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
}

.home__title{
  font-weight: 700;
  font-size: 2.3rem;
}

.home__subtitle{
  padding: 1em;
  font-weight: 600;
  font-size: 20px;
}

.home__text{
  padding: 1em;
  max-width: 800px;
}
</style>
