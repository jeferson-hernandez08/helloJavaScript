//async/await:
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Usuario encontrado"), 2000);
  });
}

async function mostrar() {
  const result = await getUser();
  console.log(result);
}

mostrar();