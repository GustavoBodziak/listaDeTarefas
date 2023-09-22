const toDoList = {

    init: function() {
        this.cacheSelector()
        this.bindEvents()
    },

    cacheSelector: function() {
        this.$buttonDone = document.querySelectorAll('.done')
        this.$buttonRemove = document.querySelectorAll('.remove')
        this.$inputTask = document.querySelector('.inputTask')
        this.$tasks = document.querySelector('.tasks')
    },

    bindEvents: function() {
        const self = this

       this.$buttonDone.forEach(function(button){
            button.onclick = self.Events.buttonDone_click
       })

       this.$buttonRemove.forEach(function(button){
            button.onclick = self.Events.buttonRemove_click
       })

       this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

    },

    Events: {

        buttonDone_click: function (e) {
            
            const li = e.target.parentElement
            
            let isCheck = li.classList.contains('check')

            if(!isCheck) {
                li.classList.add('check')
                return
            }

            li.classList.remove('check')

        },

        buttonRemove_click: function (e) {

            const li = e.target.parentElement
            li.classList.add('removed')

        },

        inputTask_keypress: function (e) {
            
            const key = e.key
            let task = e.target.value

            if(key === 'Enter') {

                this.$tasks.innerHTML += `
                    <li >
                        <span class="done"></span>
                        <h2>${task}</h2>
                        <span class="remove">x</span>
                    </li>
                
               `

               e.target.value = ''

               this.cacheSelector()
               this.bindEvents() 

            }

        }
       

    },

}

toDoList.init()