import { AbstractConsumerObject } from 'abstract-consumer-object';


/**
 * Base class for object derived from Consumer
 * Contains various methods for common CRUD tasks
 * Should be extended to provide methods for objects
 * @abstract
 */
export class CrudConsumerObject extends AbstractConsumerObject {
    update(changedFields) {
        return super.patch('', changedFields);
    }

    save() {
        return super.put(this.id, this);
    }

    delete() {
        return super.delete(this.id);
    }
}
