import { Observable } from '../../Observable';
import { delay } from '../../operator/delay';
Observable.prototype.delay = delay;
