package io.github.jhipster.remesasvenezuela.repository;

import io.github.jhipster.remesasvenezuela.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
