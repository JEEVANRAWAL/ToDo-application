import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useTodoStore= defineStore('list',{
    state:()=>({
        tasklist: ref([{
            id: 1,
            task: "email check",
            status:"Complete",
            DueDate: "2023-07-12"
        },
        {
            id: 2,
            task: "Exam Form Submission",
            status:"ToDo",
            DueDate: "2023-12-17"
        },
        {
            id: 3,
            task: "College project",
            status:"Dueover",
            DueDate: "2023-04-02"
        },
        {
            id: 4,
            task: "Insurance premium payment",
            status:"ToDo",
            DueDate: "2023-08-15"
        }
    ]),

    Task:ref(null),
    duedate: ref(null),
    }),
    getters:{
        todoList:(state)=>{
            const todos=[];
            var Currentdate= new Date();
            var formattedTdyDate= Currentdate.toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});
            state.tasklist.forEach(element => {
            if(element.status == "ToDo"){
                var dueDate= new Date(element.DueDate);
                var formattedDueDate= dueDate.toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});
                
                if(formattedDueDate >= formattedTdyDate){
                    const Time_difference= dueDate.getTime() - Currentdate.getTime();
                    const remaining_days= Math.round(Time_difference/ (1000*3600*24));
                    const todo={
                        id: element.id,
                        task: element.task,
                        //status: "ToDo",
                        DueDate: element.DueDate,
                        remaining_days: remaining_days
                    }
                    todos.push(todo);
                }

            }
           });
           return todos;
        },

        completeList:(state)=>{
            const cmpldTodos=[];
            state.tasklist.forEach(element =>{
                if(element.status == "Complete"){
                    cmpldTodos.push(element);
                }
            });

            return cmpldTodos
        },

        DueoverList:(state)=>{
            const dueOverTodos=[];
            state.tasklist.forEach(element => {
                if(element.status == "Dueover"){
                    dueOverTodos.push(element);
                }
            });

            return dueOverTodos
        }

    },
    actions:{
        addtask(){
            //for date validation
            const currentdate= new Date();
            const formattedCurrentDate= currentdate.toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});
            const enteredDueDate= new Date(this.duedate).toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});

            if(enteredDueDate >= formattedCurrentDate){
                const lastElement= this.tasklist.slice(-1);
                const newItem={
                    id: ref((lastElement[0].id)+1),
                    task: this.Task,
                    status: "ToDo",
                    DueDate: this.duedate
                };
                this.tasklist.push(newItem);
                this.Task= null;
                this.duedate= null;
                console.log('new task addeed');
            }else{
                console.log('invalid date');
            }
        },

        Deletetodo(id){
            console.log(id);
            var key = 'id';

            for(var i=0; i< this.tasklist.length; i++){
                if(this.tasklist[i][key] === id){
                    const index = i;
                   //console.log(index);
                    this.tasklist.splice(index,1);
                    break;
                }
            }
        },

       dueOver(){
        let currentdate= new Date();
        let formattedCurrentDate= currentdate.toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});

        this.tasklist.forEach(element => {
            let receivedDate= new Date(element.DueDate);
            let formattedReceivedDate= receivedDate.toLocaleDateString('en-US',{year: 'numeric', month:'2-digit', day:'2-digit'});
            if(formattedReceivedDate < formattedCurrentDate){
                element.status= "Dueover";
            }
        });
       },

       completetask(id){
            this.tasklist.forEach(element => {
                if(element.id === id){
                    element.status= 'Complete';
                }
            });
       }
        
    }
})