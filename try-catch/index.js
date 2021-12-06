async function fetchtodoos() {
    try {        
        await new Promise(p => setTimeout(() => p(), 3000));
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        //проброс ощибки - переход в catch
        // throw new Error("Ошибка");
        const data = await response.json();
        console.log(data);
    } catch(e) {
        console.error(e);
    } finally {
        console.log("finally");
    }
}

fetchtodoos();