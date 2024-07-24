package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;
	
	
	public List<CardVo> findAll(){
		return sqlSession.selectList("cardNtask.findAll");	
		}
	
	public List<CardVo> findAllCard(){
		return sqlSession.selectList("cardNtask.findAllCard");	
		}
	
	public List<TaskVo> findAllTask(){
		return sqlSession.selectList("cardNtask.findAllTask");	
		}
}
