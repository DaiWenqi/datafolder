function Router(opts){
    this.path = ""; //department:部门 employee：员工  personal：个人详情
    this.datas = opts; // 初始化数据
}

Router.prototype.setPath = function(v){
    this.path = v;
}
Router.prototype.getPath = function(v){
    return this.path;
}

Router.prototype.setDatas = function(obj){
    for(var key in obj){
        console.log(key)
    }
    this.datas[this.path] = $.extend(this.datas[this.path],obj);
    this.render();
    return obj;
}
Router.prototype.getDatas = function(obj){
    //return this.datas[this.path ? this.path : "department"]; //默认查询部门
    var result = this.datas[this.path ? this.path : "department"];
    if(result instanceof Array){
    }else if(result instanceof Object){
        debugger
        result = JSON.stringify(result);
    }
    return result;

}
 /**
     * k:
     */
    Router.prototype.setByKey = function(k,v){
        var result;

            if("string" == typeof v){//字符串直接返回
                result = v;
            }else if(v instanceof Array){//数组直接返回
                result = v
            }else{//对象转成字符串
                result = JSON.stringify(v);
            }
        this.datas[this.path][k] = result;
        return result;
    }

    Router.prototype.getByKey = function(k){
        
        // return  this.datas[this.path][k];
        var result = this.datas[this.path][k];
        if("string" == typeof result){//字符串直接返回
            result = result;
        }else if(result instanceof Array){//数组直接返回
            result = result
        }else{//对象转成字符串
            result = JSON.stringify(result);
        }
        return result;
    }

    Router.prototype.render = function(){

        $('.layui-card-header').html(this.datas[this.path].title);
    }
