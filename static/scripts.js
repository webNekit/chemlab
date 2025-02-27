// === Мобильное меню (если нужно) ===
document.addEventListener("DOMContentLoaded", () => {
    console.log("Скрипты загружены!");
});

// === Модальное окно для информации о химических элементах ===
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".element"); // Все элементы таблицы
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const modalClose = document.getElementById("modal-close");

    if (elements.length > 0) {
        elements.forEach(element => {
            element.addEventListener("click", () => {
                const elementName = element.getAttribute("data-name");
                const elementInfo = element.getAttribute("data-info");

                modalContent.innerHTML = `<h2>${elementName}</h2><p>${elementInfo}</p>`;
                modal.classList.add("active");
            });
        });

        modalClose.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }
});

// === Анимация реакции в лаборатории ===
document.addEventListener("DOMContentLoaded", () => {
    const startReactionBtn = document.getElementById("start-reaction");
    const reactionContainer = document.getElementById("reaction-container");

    if (startReactionBtn) {
        startReactionBtn.addEventListener("click", () => {
            reactionContainer.innerHTML = "<p>Реакция запущена... 🔥💨</p>";
            reactionContainer.style.backgroundColor = "yellow";

            setTimeout(() => {
                reactionContainer.innerHTML = "<p>Реакция завершена! ✅</p>";
                reactionContainer.style.backgroundColor = "lightgreen";
            }, 3000);
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт загружен и работает!");

    // Добавление анимации к карточкам фактов
    const factCards = document.querySelectorAll(".fact.card");
    factCards.forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });

    // Рандомизация порядка отображения фактов при загрузке страницы
    const factsContainer = document.querySelector(".facts-list");
    if (factsContainer) {
        let facts = Array.from(factsContainer.children);
        facts.sort(() => Math.random() - 0.5);
        facts.forEach((fact) => factsContainer.appendChild(fact));
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitQuiz");
    if (submitButton) {
        submitButton.addEventListener("click", function () {
            let score = 0;

            // Проверка ответов
            if (document.querySelector('input[name="q1"]:checked')?.value === "O2") score++;
            if (document.querySelector('input[name="q2"]:checked')?.value === "HCl") score++;
            if (document.querySelector('input[name="q3"]:checked')?.value === "Iron") score++;

            // Вывод результата
            const resultText = document.getElementById("quizResult");
            resultText.textContent = `Вы набрали ${score} из 3 баллов!`;
            resultText.style.color = score === 3 ? "green" : "red";
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const theoryData = {
        law_conservation: {
            title: "Закон сохранения массы",
            text: "Масса веществ, вступивших в химическую реакцию, равна массе продуктов реакции. Этот закон был открыт М. В. Ломоносовым и подтверждён А. Лавуазье."
        },
        periodic_law: {
            title: "Периодический закон Менделеева",
            text: "Свойства химических элементов находятся в периодической зависимости от заряда их атомных ядер. Это позволяет предсказывать характеристики ещё не открытых элементов."
        },
        electronegativity: {
            title: "Электроотрицательность",
            text: "Способность атома притягивать к себе электроны. Чем выше электроотрицательность, тем сильнее атом притягивает электроны в соединениях."
        }
    };

    window.showTheory = function (key) {
        const content = document.getElementById("theory-content");
        document.getElementById("theory-title").textContent = theoryData[key].title;
        document.getElementById("theory-text").textContent = theoryData[key].text;
        content.classList.remove("hidden");
        content.style.display = "block";
    };

    window.hideTheory = function () {
        document.getElementById("theory-content").style.display = "none";
    };
});






document.addEventListener("DOMContentLoaded", function () {
    const elementsData = {
        H: {
            name: "Водород",
            details: "Водород (H) — самый лёгкий и распространённый элемент во Вселенной. Используется в ракетном топливе и химических реакциях."
        },
        He: {
            name: "Гелий",
            details: "Гелий (He) — инертный газ, который используется в воздушных шарах и в качестве охлаждающего агента."
        },
        O: {
            name: "Кислород",
            details: "Кислород (O) необходим для дыхания большинства живых существ и входит в состав воды (H₂O)."
        },
        Na: {
            name: "Натрий",
            details: "Натрий (Na) является мягким металлом и важным элементом для работы нервной системы."
        },
        Cl: {
            name: "Хлор",
            details: "Хлор (Cl) используется для дезинфекции воды и входит в состав поваренной соли (NaCl)."
        }
    };

    window.showElementInfo = function (symbol) {
        const infoBox = document.getElementById("element-info");
        document.getElementById("element-title").textContent = elementsData[symbol].name;
        document.getElementById("element-details").textContent = elementsData[symbol].details;
        infoBox.classList.remove("hidden");
        infoBox.style.display = "block";
    };

    window.hideElementInfo = function () {
        document.getElementById("element-info").style.display = "none";
    };
});





let beakers = [];
let history = [];

function addBeaker() {
    if (beakers.length >= 3) return;

    let table = document.getElementById("table");
    let beaker = document.createElement("div");
    beaker.classList.add("beaker");
    beaker.setAttribute("draggable", "true");
    beaker.setAttribute("ondragstart", "dragBeaker(event)");
    beaker.setAttribute("ondrop", "dropBeaker(event)");
    beaker.setAttribute("ondragover", "allowDrop(event)");

    let liquid = document.createElement("div");
    liquid.classList.add("liquid");
    beaker.appendChild(liquid);

    table.appendChild(beaker);
    beakers.push(beaker);

    updateBeakerPositions();
    history.push({ action: "addBeaker", beaker });
}

function updateBeakerPositions() {
    let positions = ["center", "left", "right"];
    beakers.forEach((b, i) => b.classList.add(positions[i]));
}

function openChemicalMenu() {
    document.getElementById("chemical-menu").classList.remove("hidden");
}

function closeChemicalMenu() {
    document.getElementById("chemical-menu").classList.add("hidden");
}

function drag(event, substance, color) {
    event.dataTransfer.setData("substance", substance);
    event.dataTransfer.setData("color", color);
}

function dragBeaker(event) {
    event.dataTransfer.setData("beakerIndex", beakers.indexOf(event.target));
}

function allowDrop(event) {
    event.preventDefault();
}



function drop(event, beaker) {
    event.preventDefault();
    let substance = event.dataTransfer.getData("substance");
    let color = event.dataTransfer.getData("color");

    if (substance) {
        let liquid = beaker.querySelector(".liquid");
        if (!liquid.dataset.substance) {
            liquid.dataset.substance = substance;
            liquid.style.backgroundColor = color;
            liquid.style.height = "100%";
        } else {
            let newColor = mixLiquids(liquid.dataset.substance, substance);
            liquid.dataset.substance = newColor.substance;
            liquid.style.backgroundColor = newColor.color;
        }
    }
}

function dropBeaker(event) {
    event.preventDefault();
    let fromIndex = event.dataTransfer.getData("beakerIndex");
    let fromBeaker = beakers[fromIndex];
    let toBeaker = event.target.closest(".beaker");

    if (fromBeaker && toBeaker && fromBeaker !== toBeaker) {
        let fromLiquid = fromBeaker.querySelector(".liquid");
        let toLiquid = toBeaker.querySelector(".liquid");

        if (fromLiquid.dataset.substance) {
            let newColor = mixLiquids(toLiquid.dataset.substance, fromLiquid.dataset.substance);
            toLiquid.dataset.substance = newColor.substance;
            toLiquid.style.backgroundColor = newColor.color;
            toLiquid.style.height = "100%";

            fromLiquid.style.backgroundColor = "transparent";
            fromLiquid.style.height = "0%";
            delete fromLiquid.dataset.substance;
        }
    }
}

function mixLiquids(substance1, substance2) {
    if ((substance1 === "HCl" && substance2 === "NH3") || (substance1 === "NH3" && substance2 === "HCl")) {
        return { substance: "NH4Cl", color: "purple" };
    }
    return { substance: substance2, color: substance2 === "HCl" ? "red" : "blue" };
}

function undoLastAction() {
    if (history.length === 0) return;
    let lastAction = history.pop();

    if (lastAction.action === "addBeaker") {
        lastAction.beaker.remove();
        beakers.pop();
    }
}

function clearWorkspace() {
    document.getElementById("table").innerHTML = "";
    beakers = [];
    history = [];
}
