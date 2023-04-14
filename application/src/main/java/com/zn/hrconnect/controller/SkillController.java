package com.zn.hrconnect.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.zn.hrconnect.domain.entity.SkillMaster;
import com.zn.hrconnect.service.api.SkillService;

@RestController
public class SkillController {

	public SkillController() {
		System.out.println("----------------SkillController ------------");
	}

	@Autowired
	private SkillService skillService;

	@GetMapping("/welcome")
	public String welcome() {
		return "hellooooo  aasasasasasasasoasasasasassfsdfsdfdsf";
	}

	@GetMapping("/test")
	public String welcome1() {
		skillService.getAllSkills();
		return "hellooooooasasasasassfsdfsdfdsf";
	}

	@GetMapping("/skillbyid/{id}")
	@ResponseBody
	public Optional<SkillMaster> getSkillById(@PathVariable String id) {
		System.out.println("-----getSkillById-23232323--------");
		SkillMaster skillMaster = new SkillMaster();
		int x = Integer.parseInt(id);
		System.out.println("-----getSkillById-23232323--------"+x);
		skillMaster.setSkillId(Integer.parseInt(id));
		return null;
				//skillService.getSkillById(skillMaster);
	}

	
	@GetMapping("/skillbyid2/{id}")
	@ResponseBody
	public String getSkillById2(@PathVariable String id) {
		System.out.println("-----getSkillById-23232323--------"+id);
		return "working";
	}
}
