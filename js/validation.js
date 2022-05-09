function Validation(){
    this.require = function(val, spanId, message){
        if(!val){
            document.getElementById(spanId).innerHTML = message || "*Trường này bắt buộc nhập";
            return false;
        }
        document.getElementById(spanId).innerHTML ="";
        return true;
    };
    this.long = function(val, spanId, min, max){
        if(val.length < min || val.length > max){
            document.getElementById(spanId).innerHTML = `*Độ dài phải từ ${min} tới ${max} kí tự`;
            return false;
      
        }
        document.getElementById(spanId).innerHTML ="";
        return true;
    };
    this.namePattern = function(val, spanId, message){
        var pattern= new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
              "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
              "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if(pattern.test(val)){
            document.getElementById(spanId).innerHTML = "";
            return false;
        }
        document.getElementById(spanId).innerHTML = message|| "*Không đúng định dạng";
        return true;
    }
    this.emailPattern = function(val, spanID, message){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(val.match(pattern)){
              document.getElementById(spanID).innerHTML = "";
              return true;
        }
            document.getElementById(spanID).innerHTML = message || "*Không đúng định dạng";
            return false;
    }
    this.passPattern = function(val, spanID, message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(val.match(pattern)){
             document.getElementById(spanID).innerHTML = "";
             return true;
        }
             document.getElementById(spanID).innerHTML = message||"*Không đúng định dạng";
             return false;
    }
    this.checkSalary = function(val, spanID, message){     
        if(val < 1000000 || val > 20000000){
              document.getElementById(spanID).innerHTML = message ||"*Lương phải từ 1000000 đến 20000000";
              return true;
        }
            document.getElementById(spanID).innerHTML = "";
            return false;
    }
    this.checkHour = function(val, spanID, message){     
        if(val < 80 || val > 200){
              document.getElementById(spanID).innerHTML = message ||"*Số giờ làm phải từ 80 đến 200 giờ";
              return true;
        }
            document.getElementById(spanID).innerHTML = "";
            return false;
    }
}