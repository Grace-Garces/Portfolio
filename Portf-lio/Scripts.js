// script.js

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const duration = Math.random() * 10 + 5;
        star.style.animationDuration = `${duration}s`;

// JavaScript para rolar suavemente até a seção "Sobre Mim" ao clicar no botão
document.addEventListener('DOMContentLoaded', function() {
    const botaoAvancar = document.querySelector('.botao-avancar');

    botaoAvancar.addEventListener('click', function(event) {
        event.preventDefault();
        const sobreMimSection = document.querySelector('#sobre-mim');
        sobreMimSection.scrollIntoView({ behavior: 'smooth' });

        document.addEventListener("DOMContentLoaded", function() {
            const body = document.body;
            const colors = [
                "#192271", "#000000",
                "#000000", "#192271"
            ];
            let step = 0;
            const gradientSpeed = 0.002;
            
            function updateGradient() {
                if (step >= 1) {
                    step = 0;
                    colors.push(colors.shift());
                }
                
                const c0_0 = colors[0];
                const c0_1 = colors[1];
                const c1_0 = colors[2];
                const c1_1 = colors[3];
                
                const istep = 1 - step;
                const color1 = blendColors(c0_0, c0_1, istep);
                const color2 = blendColors(c1_0, c1_1, istep);
                
                body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
                
                step += gradientSpeed;
                
                requestAnimationFrame(updateGradient);
            }
            
            function blendColors(c0, c1, p) {
                const f = parseInt(c0.slice(1), 16);
                const t = parseInt(c1.slice(1), 16);
                const R1 = f >> 16;
                const G1 = (f >> 8) & 0x00FF;
                const B1 = f & 0x0000FF;
                const R2 = t >> 16;
                const G2 = (t >> 8) & 0x00FF;
                const B2 = t & 0x0000FF;
                return `#${(
                    0x1000000 +
                    (Math.round((R2 - R1) * p) + R1) * 0x10000 +
                    (Math.round((G2 - G1) * p) + G1) * 0x100 +
                    (Math.round((B2 - B1) * p) + B1)
                ).toString(16).slice(1)}`;
            }
            
            updateGradient();
        });
        

    });
});
});
});