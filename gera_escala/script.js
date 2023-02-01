class Acolito{

    constructor(){
        this.id = 1
        this.arrayAcolitos = []
        this.arrayFormacao = []
        this.ordemEscala = {
            1: ['Missal', false],
            2: ['Microfone', false],
            3: ['Cruz', false],
            4: ['Turibulo', false],
            5: ['Naveta', false],
            6: ['Tocha', false],
            7: ['Mestre Turibulo', false],
            8: ['Mestre Tocha', false],
            9: ['Evangeliário', false],
            10: ['Mestre Padre', false],
            11: ['Credência', false]
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
                    if(this.arrayAcolitos.length > 1){this.arrayAcolitos.sort((a, b) => a.lastDate - b.lastDate)}
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
        acolito.lastDate = new Date(document.getElementById('date').value.replace(/-/g, '\/'))
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
        if(this.arrayAcolitos.length > 1){this.arrayAcolitos.sort((a, b) => a.lastDate - b.lastDate)}
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
            td_date.innerText = new Intl.DateTimeFormat('pt-BR').format(this.arrayAcolitos[i].lastDate);
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
        const ordem = Object.keys(this.ordemEscala)
        let ordemCopy = this.ordemEscala
        if(this.arrayAcolitos.length > 0){
            this.arrayAcolitos.forEach((element, index1) => {
                var verify = false
                element.arrayFuncao.forEach((formacao, index3) => {
                    if(verify == true){
                        return
                    }
                    ordem.forEach((ordemFunc, index2) => {
                        if(verify == true){
                            return
                        }
                        var atualFunc = ordemCopy[ordemFunc][0]
                        var funcVerify = ordemCopy[ordemFunc][1]
                        console.log(`Nome: ${element.nome} Função: ${atualFunc} Formação: ${formacao}  verify: ${funcVerify}`)
                        if(atualFunc == element.lastFunc){
                            return
                        }
                        if(formacao == atualFunc && !verify && !funcVerify){
                            missa[element.nome] = atualFunc
                            verify = true
                            ordemCopy[ordemFunc][1] = true
                            return
                        }
                    })
                })
                
            })

            console.log(missa)

        }else{
            alert("Insira pelo menos uma pessoa para fazer a escala!!")
        }
        

    }


}

var acolito = new Acolito()
