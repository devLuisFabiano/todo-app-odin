export function CreateObjProject(){

    let ProjectsArr = [
        {
            name: "luis",
            todoArr: [],
        }
    ];

    const PushProject = (project) => {
        ProjectsArr.push(project);
    }
   
    return {ProjectsArr, PushProject};
}

export function CreateProjects(name){
    let todoArr = []

    return {todoArr,name}
};

