package org.brapi.brapiCertificationServer.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.io.Resource;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.resource.ResourceResolverChain;

public class CertificationTestingResourceResolver extends PathResourceResolver{
	
	@Override
	@Nullable
	public Resource resolveResource(@Nullable HttpServletRequest request, String requestPath,
			List<? extends Resource> locations, ResourceResolverChain chain) {

		if (logger.isTraceEnabled()) {
			logger.trace("Resolving resource for request path \"" + requestPath + "\"");
		}
		Resource resource = resolveResourceInternal(request, requestPath, locations, chain);
		if(resource == null) {
			requestPath = "index.html";
			resource = resolveResourceInternal(request, requestPath, locations, chain);
		}
		return resource;
	}
}
