package org.brapi.brapiCertificationServer.service;

import java.util.ArrayList;
import java.util.List;

import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.springframework.stereotype.Service;

import de.danielbechler.diff.ObjectDiffer;
import de.danielbechler.diff.ObjectDifferBuilder;
import de.danielbechler.diff.node.DiffNode;
import de.danielbechler.diff.node.DiffNode.Visitor;
import de.danielbechler.diff.node.Visit;

@Service
public class DiffAssessmentService {
	private ObjectDiffer differ;

	public DiffAssessmentService() {
		differ = ObjectDifferBuilder.buildDefault();
	}

	public List<String> compareObjects(final GenricResultsInterface actual, final GenricResultsInterface expected) {

		DiffNode diffRoot = differ.compare(actual, expected);

		final List<String> errorList = new ArrayList<String>();
		diffRoot.visit(new Visitor() {

			public void node(DiffNode node, Visit visit) {
				if (node.hasChanges() && !node.hasChildren()) {
					final Object expectedVal = node.canonicalGet(expected);
					if (expectedVal != null) {
						final Object actualVal = node.canonicalGet(actual);
						String objPath = node.getPath().toString().replaceAll("\\[[^\\[\\]]*\\]", "").replaceAll("/", "->");
						String errorMsg = "Error in " + objPath + ", Expected value: " + expectedVal + ", Actual value: " + actualVal;
						System.out.println(errorMsg);
						errorList.add(errorMsg);
					}
				}

			}
		});

		return errorList;
	}

}
