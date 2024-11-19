const getDatos = async () => {
  const consulta = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await consulta.json();
  console.log(posts);
} 
