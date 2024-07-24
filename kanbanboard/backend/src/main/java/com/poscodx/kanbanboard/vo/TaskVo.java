package com.poscodx.kanbanboard.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskVo {
    private Integer no;
    private String name;
    private String done;
    private Integer cardNo;
	public Integer getNo() {
		return no;
	}
	public void setNo(Integer no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDone() {
		return done;
	}
	public void setDone(String done) {
		this.done = done;
	}
	public Integer getCardNo() {
		return cardNo;
	}
	public void setCardNo(Integer cardNo) {
		this.cardNo = cardNo;
	}
	@Override
	public String toString() {
		return "TaskVo [no=" + no + ", name=" + name + ", done=" + done + ", cardNo=" + cardNo + "]";
	}
    
    
}
