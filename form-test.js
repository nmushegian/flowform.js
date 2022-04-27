import { test as it } from 'tapzero'
import { init, form, flow, S } from './form.js'

it('init form', ()=> {

    init({
        glob: 15,
        flob: ()=>20
    })

    it('form', t=>{
        let pt = form($=>({
            x: 1,
            y: ()=>2,
            z: S(()=>3),
            g: $.glob,
            f: $.flob
        }))
        t.equal(1, pt.x())
        t.equal(2, pt.y())
        t.equal(3, pt.z())
        t.equal(15, pt.g())
        t.equal(20, pt.f())

        let below = form($=>({
            x: pt.x,
            y: _=> pt.y() + 100
        }))

        t.equal(below.y(), 102)

        pt.y(200)
        t.equal(below.y(), 300)
    })

    it('flow', t=>{
        let pt = form($=>({
            x: 100,
            y: 100,
            dx: 1,
            dy: 0,
            _flow: ({$,_})=> {
                _.x(_.x() + _.dx())
            }
        }))
        t.equal(100, pt.x())
        flow(pt)
        t.equal(101, pt.x())
    })

})
