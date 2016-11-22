/**
 * @param context - context to bind
 * @param methods - names of methods to force using context from args
 * @private
 */
export default function _bindAll(context, ...methods) {
  methods.forEach( (method) => context[method] = context[method].bind(context) );
}
