
const project = 
{
    name:'',
    img:'',
    link:'',
    descripcion:''
}

let newProject = (name,img,descripcion,link)=>{
    let proyecto = {...project};
    proyecto.name = name;
    proyecto.img = img;
    proyecto.link = link;
    proyecto.descripcion = descripcion;
    return proyecto;
}

let projects  = [
    newProject('TP1','none.png','Trabajo Numero 1','TP1/index.html'),
    newProject('TP2','none.png','Trabajo Numero 2','TP2/index.html'),
]

projects.forEach(proyecto => {
    let proyectoHtml = project_main_tpl.content.cloneNode(true);
    proyectoHtml.querySelector('.project__name').textContent = proyecto.name;
    proyectoHtml.querySelector('.project_image').textContent = proyecto.img;
    proyectoHtml.querySelector('.project__descripcion').textContent = proyecto.descripcion;
    proyectoHtml.querySelector('a').href = proyecto.link;
    project__list.appendChild(proyectoHtml);
});
