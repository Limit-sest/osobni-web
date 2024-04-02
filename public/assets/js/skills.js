const skillDataObj = JSON.parse(`
{
    "VSCode":{
        "icon":"assets/icons/VSCode-Dark.svg",
        "desc":"Textový editor, který používám pro vytváření všech mých programů a webových stránek. Pracuji s ním už od začátků mého programování, protože je zdarma, má velkou podporu pluginů a je jednoduchý na používání."
    },
    "Git":{
        "icon":"assets/icons/Git.svg",
        "desc":"Program pro verzování a sledování změn v souborech. Používám ho pro každý svůj projekt, protože chci mít možnost se vrátit k různým verzím souboru."
    },
    "GitHub":{
        "icon":"assets/icons/Github-Dark.svg",
        "desc":"Platforma pro ukládání, spravování a sdílení kódu. Na svém účtu mám všechny progekty které jsem vytvořil s Git verzováním. Mám tam třeba i tento web."
    },
    "Photoshop":{
        "icon":"assets/icons/Photoshop.svg",
        "desc":"Program na úpravu a vytváření obrázků. Vytvářím v něm například pravidelně posty pro link @zpravy.uobory, nebo jakoukoliv jinou grafiku."
    },
    "HTML":{
        "icon":"assets/icons/HTML.svg",
        "desc":"V HTML vytvářím webové stránky přes 3 roky. Tento jazyk jsem se naučl jako první, protože byl pro mě nejjednodušší na pochopení."
    },
    "CSS":{
        "icon":"assets/icons/CSS.svg",
        "desc":"S CSS pracuji stejně dlouho jako s HTML - 3 roky. Naučil jsem se nejen základní úpravu vzhledu, ale i pokročilejší layout a fonty."
    },
    "JavaScript":{
        "icon":"assets/icons/JavaScript.svg",
        "desc":"JavaScript se stále učím. S tímto portfoliem jsem ho poprvé využil, a díky němu je například udělaná tato karta s bližšími informacemi."
    },
    "Tailwind CSS":{
        "icon":"assets/icons/TailwindCSS-Dark.svg",
        "desc":"Nadstavba pro CSS, kdy ho prakticky píšete přímo v HTML. Mně osobně se Tailwind zalíbil, protože díky němu dokážu pracovat rychleji."
    },
    "Python":{
        "icon":"assets/icons/Python-Dark.svg",
        "desc":"Programovací jazyk, který jsem se naučil především kvůli jednoduchému syntaxu. Použil jsem ho na generaci obrázků, komunikaci s APIs a nebo pro různé hry."
    },
    "Markdown":{
        "icon":"assets/icons/Markdown-Dark.svg",
        "desc":"Jazyk který ovládám a používám ho pro dokumentaci mých projektů a zapisování poznámek."
    }
}
`);
const parents = document.querySelectorAll('.skill-parent');
const skillsArray = [];

function updateDisplay(skillCard){
    let skillName = skillCard.querySelector('p').textContent
    for (const skillDataName in skillDataObj) {
        if (skillDataName === skillName) {
            display = document.getElementById("skill-display")
            display.querySelector("h3").textContent = skillName
            display.querySelector("p").textContent = skillDataObj[skillDataName].desc
            display.querySelector("img").src = skillDataObj[skillDataName].icon
            break;
        }
    }
}

parents.forEach(parent => {
    const children = parent.children;
    skillsArray.push(...Array.from(children));
});

skillsArray.forEach(function(skillCard){
    skillCard.addEventListener("mouseover", function(){
    updateDisplay(skillCard)
    })
})