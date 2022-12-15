class Acolito{

    constructor(){
        this.id = 1
        this.arrayAcolitos = []
        this.arrayFormacao = []
        this.ordemEscala = {
            1: 'Missal',
            2: 'Microfone',
            3: 'Cruz',
            4: 'Turibulo',
            5: 'Naveta',
            6: 'Tocha',
            7: 'Mestre Turibulo',
            8: 'Mestre Tocha',
            9: 'Evangeliário',
            10: 'Mestre Padre',
            11: 'Credência'
        }
        
    }

    adicionar(){
        let acolito = this.lerDados()
        let k = 0
        if(this.id == 1){
            this.salvar(acolito)
        }else{
            for(let i = 0; i < this.arrayAcolitos.length; i++){
                if(this.arrayAcolitos[i].nome == acolito.nome){
                    this.arrayAcolitos[i].lastFunc = acolito.lastFunc
                    this.arrayAcolitos[i].lastDate = acolito.lastDate
                    this.arrayAcolitos[i].arrayFuncao = acolito.arrayFuncao
                    k = 1
                }
            }

            if(k == 0){
                this.salvar(acolito)
            }
        }
        
        this.listar()
    }

    lerDados(){
        let acolito = {}

        acolito.arrayFuncao = []
        acolito.id = this.id
        acolito.nome = document.getElementById('name').value
        acolito.lastFunc = document.getElementById('func').value
        acolito.lastDate = document.getElementById('date').value
        let chk = document.getElementsByClassName('chk')
        for(let i = 0; i < chk.length; i++){
            this.arrayFormacao.push(chk[i])
        }

        this.arrayFormacao.forEach(x => {
            if(x.checked == true){
                acolito.arrayFuncao.push(x.value)
            }
        })

        chk = 0
        this.arrayFormacao = []



        return acolito
    }

    salvar(acolito){
        this.arrayAcolitos.push(acolito);
        this.id++;
    }

    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayAcolitos.length; i++){

            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_func = tr.insertCell();
            let td_date = tr.insertCell();
            let td_deletar = tr.insertCell();

            td_id.innerText = this.arrayAcolitos[i].id;
            td_nome.innerText = this.arrayAcolitos[i].nome;
            td_func.innerText = this.arrayAcolitos[i].lastFunc;
            td_date.innerText = this.arrayAcolitos[i].lastDate;
            let image = document.createElement('img');
            image.src = 'download.png';
            image.setAttribute('onclick', 'acolito.deletar('+this.arrayAcolitos[i].id+')')
            td_deletar.appendChild(image);

        }
    }
    
    cancelar(){
        document.getElementById('name').value = ''
        document.getElementById('func').value = ''
        document.getElementById('date').value = ''
    }

    deletar(id){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayAcolitos.length; i++){
            if(this.arrayAcolitos[i].id == id){
                this.arrayAcolitos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
        alert(`O item de ID ${id} será excluído!!`)
    }

    escala(acolito){
        let missa = {}

        for(let i = 0; i < this.arrayAcolitos.length; i++){
            let funcao = this.arrayAcolitos[i].arrayFuncao;
            
            funcao
            
        }

    }


}

var acolito = new Acolito()
