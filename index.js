const medida_glicemia = document.getElementById("glicemiaID");
const botao = document.getElementById("botao");
botao.disabled = true;
medida = medida_glicemia.value;


// toda vez que algo novo for inserido, faça: 
medida_glicemia.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
    medida = parseInt(e.target.value);
    
})

// toda vez que o botão for apertado, faça: 
botao.addEventListener("click", () => {

    
    const metaID = document.getElementById("meta-id");
    const fatorID = document.getElementById("fator-id");
    const insulina_fixaID = document.getElementById("insulina-fixa-id");

    metaID.innerHTML = "Meta: 110";
    fatorID.innerHTML = "Fator: 50";
    insulina_fixaID.innerHTML = "Insulina fixa após refeições: 10";

    const meta = 110;
    const resultad = medida - 110;
    const fator = 50; 
    const insulinaAAplicar = resultad / fator;
    const insulina = 3.8;
    const insulina_fixa = 10
    const totalAplicarFinal = Math.round(insulinaAAplicar + insulina_fixa);
    
    const resultadoID = document.getElementById("resultado-id");
    const insulinaAplicar = document.getElementById("resultado-a-aplicar");
    insulinaAplicar.innerHTML = `Insulina de correção a aplicar: ${insulinaAAplicar}`;
    resultadoID.innerHTML = `Resultado: ${resultad}`;
    const resultado = document.getElementById("resultado");
    const totalAplicar = document.getElementById("resultado-final");

    
    totalAplicar.innerHTML = `Total a aplicar: ${totalAplicarFinal}`;
    totalAplicar.style.textTransform = "uppercase";
    totalAplicar.style.fontSize = "32px";
    totalAplicar.style.fontWeight = "bold";
});

