/**
 * defines all errors used in Karte
 *
 * @author: blukassen
 */

import { EError } from '/evolux.supervise';

export const ErrNoEntry             = (msg)         => new EError(`No entry: ${msg}`, "KARTE:00001");
