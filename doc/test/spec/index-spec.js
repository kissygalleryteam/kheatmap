KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('kheatmap', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/kheatmap/2.0.0/']});