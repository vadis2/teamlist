'use strict';

/**
 * @class Teamlist
 * component "Teams List"
 */
class Teamlist {
    /**
     * @constructor
     * @param {Object} options
     */
    constructor(options) {
        this.el   = options.el;
        this.data = options.data;

        this.render();
        this._initEvents();
    }

    /**
     * init events
     * @private
     */
    _initEvents() {
        this.el.addEventListener('click', this._onClick.bind(this));
    }

    _onClick(event) {
        event.preventDefault();
        let item = event.target;

        switch (item.dataset.action) {
            case 'remove':
                this._onRemoveClick(item);
                break;
        }
    }

    /**
     * delete item
     * @param  {HTMLElement} item
     * @private
     */
    _onRemoveClick(item) {
        let index = parseInt(item.parentNode.parentNode.parentNode.dataset.index, 10);

        this.removeItem({
            index
        });
    }

    /**
     * delete item
     * @param  {Object} removingItem
     */
    removeItem(removingItem) {
        console.log(removingItem);
        this.data.items = this.data.items.filter((item, index) => {
            return index !== removingItem.index;
        });
        this.render();
    }

    addTeam(item) {
        this.data.items.push(item);
        this.render();
    }

    /**
     * create HTML
     */
    render() {
        function generateTeams(items) {
            return items.map((item, index) => {
                return `
                        <tr data-index="${index}">
                            <th scope=row>${index + 1}</th>
                            <td><img src="assets/img/${item.logo}" alt="" class="teamlist__logo"></td>
                            <td>${item.name} <button type="button" class="close" ><span aria-hidden="true" data-action="remove">&times;</span></button></td>
                        </tr>
                    `;
            }).join('');
        }

        this.el.innerHTML = `
                <div class="teamlist">
                    <caption>${this.data.title}</caption>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Logo</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${generateTeams(this.data.items)}
                        </tbody>
                    </table>
                </div>
               `;
    }

}

// Export
window.Teamlist = Teamlist;