package com.poscodx.kanbanboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read() {
		log.info("Request[GET /api]:");
		
		System.out.println("??"+taskRepository.findAll());
		
//		List<CardVo> cardList = taskRepository.findAllCard();
//		List<TaskVo> taskList = taskRepository.findAllTask();
//		System.out.println("card "+ cardList);
//		System.out.println("task? "+taskList);
//		
		
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(taskRepository.findAll()));
	}

}
