import { default as S } from 'purestate'
export { S }

export let _forms = {}
export let _formc = 0

export let _env = undefined

export function init(e) {
    _env = e
}

export function form(f) {
    if (!_env) throw new Error(`panic: _env not set, you need to 'init' the package`)
    const o = f(_env)
    if (o._id) throw new Error(`panic: obj already has _id: ${o}`)
    let _form = {
        _id: _formc++,
    }
    for (const [k,v] of Object.entries(o)) {
        if (k[0] == '_') {
            _form[k] = v
        } else if (typeof(v) == 'function' && v.depended_by) { // hack, sentinel value
            _form[k] = v
        } else {
            _form[k] = S(v)
        }
    }
    _forms[_formc] = _form
    return _form
}

export function flow(o) {
    if (o._flow) {
        o._flow({$:_env, _:o})
    }
}

