document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        'Console.WriteLine("Hello, <span class="highlight">Recrutador</span>");',
        'Olá, eu sou a <span class="highlight">Grace</span>, bem-vindos ao meu portfólio',
        'Desenvolvedora .NET junior'
    ];

    function typeWriter(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(element, text, i + 1, fnCallback)
            }, 40); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimation(i) {
        if (i >= texts.length) {
            ; // Reinicia o índice para repetir o texto
        }
        typeWriter(document.querySelectorAll('.texto-apresentacao > div')[i], texts[i], 0, function () {
            startTextAnimation(i + 1);
        });
    }

    startTextAnimation(0);
});

//ANIMAÇÃO DE ESTRELAS DO .BODY BACKGROUND

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function createStars() {
        const stars = document.createElement('div');
        stars.className = 'stars';
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        stars.style.left = `${randomX}px`;
        stars.style.top = `${randomY}px`;
        body.appendChild(stars);
    }

    // Cria múltiplas estrelas e as posiciona aleatoriamente na tela
    for (let i = 0; i < 200; i++) {
        createStars();
    }
});


//POP-UP DE EXPLICAÇÃO DAS LINGUAGENS DA SECTION FERRAMENTAS

document.addEventListener("DOMContentLoaded", function () {
    const linguagens = {
        java: "Java é uma linguagem de programação usada para criar programas e aplicativos que funcionam em computadores e dispositivos diferentes. É como uma linguagem comum que os computadores entendem, mas escrita de forma que também possamos entender. Ela é popular porque permite aos desenvolvedores criar software poderoso e confiável para uma variedade de usos, desde aplicativos móveis até sistemas empresariais complexos.",
        csharp: "C# é uma linguagem de programação, assim como o Java. Ela foi criada pela Microsoft e é usada principalmente para desenvolver aplicativos que rodam no sistema Windows, como programas de desktop, jogos e aplicativos web. Assim como o Java, o C# é poderoso e versátil, permitindo aos desenvolvedores criar software sofisticado com facilidade e eficiência.",
        react: "React é uma biblioteca JavaScript de código aberto para a criação de interfaces de usuário, desenvolvida pelo Facebook. Lançada inicialmente em 2013, ela se destacou por sua abordagem declarativa, eficiente e flexível para construir componentes de interface.",
        html: "HTML (HyperText Markup Language) é uma linguagem de marcação usada para criar e estruturar páginas da web. É como o esqueleto de uma página web, onde você define elementos como textos, imagens, links e formulários. HTML usa tags (etiquetas) para indicar como cada parte do conteúdo deve ser exibida no navegador. É a base fundamental de qualquer página que você vê na internet, permitindo que os navegadores saibam como mostrar o conteúdo para os usuários.",
        javascript: "JavaScript (JS) é uma linguagem de programação usada principalmente para criar interatividade em páginas da web. Ao contrário do HTML, que define a estrutura e o conteúdo de uma página, o JavaScript permite que você adicione comportamentos dinâmicos, como animações, validação de formulários, atualizações de conteúdo sem recarregar a página e muito mais. É como a 'inteligência' por trás da página web, tornando-a mais dinâmica e responsiva às ações dos usuários.",
        css: "CSS (Cascading Style Sheets) não é uma linguagem de programação, mas sim uma linguagem de estilo usada para definir a apresentação e o design de páginas da web escritas em HTML. Enquanto o HTML estrutura o conteúdo de uma página, o CSS controla como esse conteúdo é exibido, definindo coisas como cores, fontes, espaçamento, layout e até mesmo animações. É como o 'estilista' da página, garantindo que ela não só funcione bem, mas também tenha uma aparência atraente e coesa para os visitantes."
    };

    const buttons = document.querySelectorAll(".linguagem");
    buttons.forEach(button => {
        button.setAttribute("type", "button");
        button.addEventListener("click", function () {
            const linguagem = button.getAttribute("data-linguagem");
            const description = linguagens[linguagem];
            showPopup(description, linguagem);
        });
    });

    function showPopup(content, linguagem) {
        if (!document.getElementById(linguagem)) {
            if (document.getElementsByClassName("popup")){
                var elementos = document.getElementsByClassName("popup");
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].remove();
                }
            }
            let popup = document.createElement("div");
            popup.setAttribute("id", linguagem);
            popup.setAttribute("class", "popup");
    
            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.classList.add("close-btn");
            closeButton.addEventListener("click", function () {
                document.body.removeChild(popup);
            });
    
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("popup-content");
            contentDiv.textContent = content;
    
            popup.appendChild(closeButton);
            popup.appendChild(contentDiv);
            document.body.appendChild(popup);
    
            popup.style.display = "block";
        } else {
            closePopup(linguagem)
        }
    }
});

function closePopup(id) {
    if (document.getElementById(id)) {
        let elemento = document.getElementById(id);
        elemento.remove();
    }
}



//ANIMAÇÃO DO TITULO DA SECTION FERRAMENTAS (AUTO DIGITAÇÃO)
document.addEventListener("DOMContentLoaded", function () {
    const textsLanges = [
        'Minhas Ferramentas'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 300); // Aumentei o tempo para 300ms para reduzir a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimationLanges(i) {
        if (i >= textsLanges.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Langes'), textsLanges[i], 0, function () {
            startTextAnimationLanges(i + 1);
        });

    }

    //ANIMAÇÃO DO TITULO DA SECTION PROJETOS (AUTO DIGITAÇÃO)

    startTextAnimationLanges(0);

    const textsProject = [
        'Meus Projetos'
    ];

    function typeWriterProject(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterProject(element, text, i + 1, fnCallback)
            }, 300); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimationProject(i) {
        if (i >= textsProject.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterProject(document.querySelector('.texto-Project'), textsProject[i], 0, function () {
            startTextAnimationProject(i + 1);
        });
    }
    //Animação AOS, para as sections se moverem na tela
    startTextAnimationProject(0);

    AOS.init({
        duration: 1200, // Duração padrão das animações
        once: false, // As animações acontecem apenas uma vez
        easing: 'ease-out-back' // Tipo de easing
    });
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 2900, // Duração padrão das animações
            once: false, // As animações acontecem apenas uma vez
            easing: 'ease-out-back' // Tipo de easing
        });
    });

});

//Estilo texto da section ferramentas (auto digitação)
document.addEventListener("DOMContentLoaded", function () {
    const textsFerament1 = [
        'Java'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimationLanges(i) {
        if (i >= textsFerament1.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament1'), textsFerament1[i], 0, function () {
            startTextAnimationLanges(i + 1);
        });
    }

    startTextAnimationLanges(0);

    const textsFerament2 = [
        'C#'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }


    function startTextAnimationLanges2(i) {
        if (i >= textsFerament2.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament2'), textsFerament2[i], 0, function () {
            startTextAnimationLanges2(i + 1);
        });
    }

    startTextAnimationLanges2(0);

    const textsFerament3 = [
        'React'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }


    function startTextAnimationLanges3(i) {
        if (i >= textsFerament3.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament3'), textsFerament3[i], 0, function () {
            startTextAnimationLanges3(i + 1);
        });
    }

    startTextAnimationLanges3(0);

    const textsFerament4 = [
        'HTML'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimationLanges4(i) {
        if (i >= textsFerament4.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament4'), textsFerament4[i], 0, function () {
            startTextAnimationLanges4(i + 1);
        });
    }

    startTextAnimationLanges4(0);

    const textsFerament5 = [
        'JavaScript'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimationLanges5(i) {
        if (i >= textsFerament5.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament5'), textsFerament5[i], 0, function () {
            startTextAnimationLanges5(i + 1);
        });
    }

    startTextAnimationLanges5(0);

    const textsFerament6 = [
        'CSS'
    ];

    function typeWriterLanges(element, text, i, fnCallback) {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriterLanges(element, text, i + 1, fnCallback)
            }, 500); // Reduzi o tempo para 90ms para aumentar a velocidade
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 900);
        }
    }

    function startTextAnimationLanges6(i) {
        if (i >= textsFerament6.length) {
            i = 0; // Reinicia o índice para repetir o texto
        }
        typeWriterLanges(document.querySelector('.texto-Ferament6'), textsFerament6[i], 0, function () {
            startTextAnimationLanges6(i + 1);
        });
    }

    startTextAnimationLanges6(0);
});





