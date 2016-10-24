'use strict';

/**
 * @class AddTeam
 * component "Add Team"
 */
class AddTeam {
    /**
     * @constructor
     * @param {Object} options
     */
    constructor(options) {
        console.log("in");
        this.el       = options.el;
        this.data     = options.data;
        this.onSubmit = options.onSubmit;

        this.render();
        this._initEvents();
    }

    /**
     * init events
     * @private
     */
    _initEvents(){
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    /**
     * Sending of form data
     * @param {Event} event
     * @private
     */
    _onSubmit(event){
        event.preventDefault();

        this.onSubmit(this);
        event.target.reset();
    }

    getField(name){
        console.log(name);
        return this.el.querySelector(`[name="${name}"]`);
    }

    render() {
        this.el.innerHTML = `
                <form class="form-inline">
                    <div class="form-group">
                        <label>Team</label>
                        <input type="text" class="form-control" name="name">
                    </div>
                    <button type="submit" class="btn btn-default">Add Team</button>
                </form>
            `;
    }
}

//export
window.AddTeam = AddTeam;
