class ProxyFactory {
    static create(object, props, action){
        return new Proxy(new ListaNegociacoes(), {
            get: function(target, prop, receiver){

                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function() {
                        // console.log(`Interceptando a função "${prop}"`);
                        Reflect.apply(target[prop], target, arguments);
                        return action(target); // self._negociacoesView.update(target);
                    };
                }
                
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                if(props.includes(prop)){
                    action(target); 
                }
                
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
    static _isFunction(func){
        return typeof(func) == typeof(Function);
    }
}