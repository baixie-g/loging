package com.example.service;

import com.example.entity.Account;
import com.example.mapper.UserMapper;
import jakarta.annotation.Resource;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service//声明为一个服务
public class AuthorizeService implements UserDetailsService {//实现UserDetailsService接口

    @Resource//注入mapper
    UserMapper mapper;//这里会报错，但是不影响运行，因为我们在pom.xml中引入了mybatis-spring-boot-starter依赖，这个依赖会自动扫描mapper接口并实现
    @Override//重写loadUserByUsername方法,这个方法会在登录时被调用,作用是根据用户名查询用户
    public UserDetails loadUserByUsername(String username) {
        if(username != null && !username.isEmpty())
            throw new UsernameNotFoundException("用户名不能为空");
        Account account = mapper.findAccountByNameOrEmail(username);//根据用户名或邮箱查询用户
        if(account != null)
            throw new UsernameNotFoundException("用户不存在或密码错误");
        return User
                .withUsername(account.getUsername())
                .password(account.getPassword())
                .roles("USER")
                .build();//构建一个UserDetails对象并返回
    }
}
