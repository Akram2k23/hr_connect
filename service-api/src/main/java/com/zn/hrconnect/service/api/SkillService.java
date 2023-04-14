package com.zn.hrconnect.service.api;

import java.util.List;
import java.util.Optional;

import com.zn.hrconnect.domain.entity.SkillMaster;



public interface SkillService {


    String test();
    public List<SkillMaster> getAllSkills();
    
    public Optional<SkillMaster> getSkillById(SkillMaster skillMaster);
}
