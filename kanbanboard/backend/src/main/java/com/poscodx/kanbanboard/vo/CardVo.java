package com.poscodx.kanbanboard.vo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public class CardVo {
    private Integer no;
    private String title;
    private String description;
    private String status;
    private List<TaskVo> tasks;
    
    
	public Integer getNo() {
		return no;
	}
	public void setNo(Integer no) {
		this.no = no;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public List<TaskVo> getTasks() {
        return tasks;
    }

    public void setTasks(List<TaskVo> tasks) {
        this.tasks = tasks;
    }
	
	@Override
	public String toString() {
		return "CardVo [no=" + no + ", title=" + title + ", description=" + description + ", status=" + status
				+ ", tasks=" + tasks + "]";
	}
	
	
    
}
