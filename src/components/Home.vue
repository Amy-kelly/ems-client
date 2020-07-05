<template>
<div id="wrap">
			<div id="top_content">
				<div id="header">
					<div id="rightheader">
						<p>
							2020/07/04
							<br />
                            <el-button type="danger" plain @click="exit">exit</el-button>
						</p>
					</div>
					<div id="topheader">
						<h1 id="title">
							<a href="#">main</a>
						</h1>
					</div>
					<div id="navigation">
					</div>
				</div>
				<div id="content">
					<p id="whereami">
					</p>
					<h1>
						Welcome  {{user_msg}}
					</h1>
					<table class="table">
						<tr class="table_header">
							<td>ID</td>
							<td>Name</td>
							<td>Photo</td>
							<td>Salary</td>
							<td>Age</td>
							<td>Operation</td>
						</tr>
						<tr v-for="(emp,index) in emp_list" :key="emp.pk" :class="index%2==0?'row1':'row2'">
							<td>{{emp.pk}}</td>
							<td>{{emp.emp_name}}</td>
							<td><img :src="emp.img" style="height: 60px;"></td>
							<td>{{emp.salary}}</td>
							<td>{{emp.age_change}}</td>
							<td><a href="javascript:;" @click="delEmp(emp.pk)">delete emp</a>&nbsp;
<!--                                <a href="">update emp</a>-->
                                <router-link :to="`/update_emp/`+ emp.pk">update emp</router-link>
                            </td>
						</tr>
					</table>
					<p>
<!--						<input type="button" class="button" value="Add Employee"/>-->
                        <el-button type="success" plain><router-link to="/add_emp">Add Employee</router-link></el-button>
					</p>
				</div>
			</div>
			<div id="footer">
				<div id="footer_bg">
				ABC@126.com
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                user_msg:"",
                emp_list:[],
                emp_id:"",

            }
        },
        methods:{
            //显示员工列表
            empList(){
                this.$axios.get("http://127.0.0.1:8000/userapp/emp/").then(res=>{
                    // console.log(res.data.results);
                    this.emp_list = res.data.results;
                }).catch(error=>{
                    this.$message.error("员工列表显示有误")
                })
            },
            //删除员工
            delEmp(emp_id){

                console.log(emp_id)
                alert(emp_id)
                // this.emp_list.splice(index,1)

                this.$axios.delete("http://127.0.0.1:8000/userapp/emp/"+`${emp_id}/`).then(res=>{
                    alert("你确定要删除吗");
                    // console.log(res.data.results);
                    // this.emp_list.splice(emp_id,1)
                    this.emp_list = res.data.results;
                    this.$message("删除成功")
                }).catch(error=>{
                    this.$message.error("删除失败")
                })
            },
            exit(){
                localStorage.clear()
                this.$router.push("/login")
            }
        },
        created() {
            let username = localStorage.getItem("user");
            if(username){
                  this.user_msg = username
            }else {
                this.$message.error("请先登录");
                this.$router.push("/login")
            }
            this.empList();
        }
    }
</script>

<style scoped>

</style>
