package com.example.mapper;

import com.example.entity.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    //这个接口会被mybatis自动实现，不需要我们写实现类
    //这里的方法名和参数名要和xml文件中的id和parameterType一致
    //这里的返回值类型要和xml文件中的resultType一致
    //这里的sql语句要和xml文件中的sql语句一致
    //
    @Select("select * from db_account where username = #{username}")
    Account findAccountByNameOrEmail(String text);

}
