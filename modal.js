const btnOpenModal = document.querySelector('#generateModal');

btnOpenModal.onclick = function() {
    myModal.generateModal({
        ok: name => {
            alert("O nome é: "+ name);
        },
        cancel: name => {
            alert('Operação cancelada');
        }
    })
}

const myModal = (function () {

    let _onOkFn;
    let _onCancelarFn;

    const _OPEN_STATUS = "--is-open";
    const _modal = document.querySelector('.modal');
    const _form = document.querySelector('.modal form');
    const _input = document.querySelector ('.modal form input')

    function _resetForm() {
        _form.reset();
    }    

    function generateModal (config) {
        if (config.ok) {
            _onOkFn = config.ok;
        }
        if (config.cancel) {
            _onCancelarFn = config.cancel;
        }
        _modal.classList.add(_OPEN_STATUS)
    }

    function cancelOp () {
        _onCancelarFn();
        closeModal();
    }

    function closeModal () {
        _modal.classList.remove(_OPEN_STATUS)
    }

    _form.onsubmit  = function(event){
        event.preventDefault();
        _onOkFn(_input.value);
        closeModal();
        _resetForm();
    }

    return {
        cancelOp, 
        generateModal, 
        closeModal
    }
})()