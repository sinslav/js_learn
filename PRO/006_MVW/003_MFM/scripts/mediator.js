Mediator = function() {
    
    var components = {};
    
    var broadcast = function(event, args, source) {
        if (!event) {
            return;
        }
        args = args || [];
        for (var c in components) {
            if (typeof components[c]["on" + event] == "function") {
                try {
                    source = source || components[c];
                    components[c]["on" + event].apply(source, args);
                } catch (err) {
                    debug(["Mediator error.", event, args, source, err].join(' '));
                }
            }
        }
    };
    
    var addComponent = function(name, component, replaceDuplicate) {
        if (name in components) {
            if (replaceDuplicate) {
                removeComponent(name);
            } else {
                throw new Error('Mediator name conflict: ' + name);
            }
        }
        components[name] = component;
    };
    
    var removeComponent = function(name) {
        if (name in components) {
            delete components[name];
        }
    };
    
    var getComponent = function(name) {
        return components[name]; // undefined if component has not been added
    };
    
    var contains = function(name) {
        return (name in components);
    };
    
    return {
        name      : "Mediator",
        broadcast : broadcast,
        add       : addComponent,
        rem       : removeComponent,
        get       : getComponent,
        has       : contains
    };
}();