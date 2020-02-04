window.onload = function(){
    class UI{
        addElement(variable, style, title, text){
            const element = document.createElement('div');
            element.classList.add(style);
            element.innerHTML = `<h2> ${title} </h2>`;
            element.innerHTML += `<p> ${text} </p>`;
            variable.appendChild(element);
        }

        addImage(variable, style, file){
            const element = document.createElement('div');
            element.classList.add(style);
            element.innerHTML = `<img src=" ${file} ">`
            variable.appendChild(element);
        }

        footerCopyright(){
            const footer = document.getElementById('footer');
            const today = new Date();
            const year = today.getFullYear();
            footer.innerHTML = `<h3> Copyright &copy ${year} </h3>`;
        }

        nav(sectionNav, direction){
            const lista = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', `${direction}`);
            const textNode = document.createTextNode(`${sectionNav}`);
            a.appendChild(textNode);
            document.getElementById('navigation').appendChild(lista);
            lista.appendChild(a);
        }

    }
    
    // textos
    const title1 = "Prueba";
    const text1 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    const sct1 = document.querySelectorAll('section[id]')[0];

    const title2 = "Prueba";
    const text2 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    const sct2 = document.querySelectorAll('section[id]')[1];

    const title3 = "Prueba";
    const text3 = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
    const sct3 = document.querySelectorAll('section[id]')[2];

    // Imagenes
    const article1 = document.getElementById('article1');
    const file1 = "../img/prueba.jpg";

    const article2 = document.getElementById('article2');
    const file2 = "../img/img1.jpg";

    const article3 = document.getElementById('article3');
    const file3 = "../img/img2.jpg";

    // Sections in array:
    const section = document.querySelectorAll('section[id]');
   
    // Instanciando la clase
    const ui = new UI();
    // Textos
    ui.addElement(sct1, 'section1-text', title1, text1);
    ui.addElement(sct2, 'section1-text', title2, text2);
    ui.addElement(sct3, 'section1-text', title3, text3);

    // Imagenes
    ui.addImage(article1, 'image-container', file1);
    ui.addImage(article2, 'image-container', file2);
    ui.addImage(article3, 'image-container', file3);

    //Footer
    ui.footerCopyright(footer);

    //Nav
    ui.nav('Section1', '#section1');
    ui.nav('Section2', '#section2');
    ui.nav('Section3', '#section3');

}




    